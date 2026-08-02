// True masonry (shortest-column-first bin packing) instead of CSS
// `column-count`. CSS columns fill top-to-bottom within a single column
// before moving to the next, and `break-inside: avoid` forces a tall item
// that doesn't fit the remaining space to jump to the next column —
// leaving a visible empty gap at the bottom of the column it left. This
// measures real rendered item heights (after images load) and distributes
// items into whichever column is currently shortest, so nothing gets left
// with a gap.
export function initMasonry(container: HTMLElement) {
	const items = Array.from(container.children) as HTMLElement[];
	if (!items.length) return;

	function getColumnCount() {
		const width = window.innerWidth;
		if (width <= 480) return 1;
		if (width <= 720) return 2;
		return 3;
	}

	function layout() {
		const columnCount = getColumnCount();
		const columns: HTMLElement[][] = Array.from({ length: columnCount }, () => []);
		const heights = new Array(columnCount).fill(0);

		items.forEach((item) => {
			const shortest = heights.indexOf(Math.min(...heights));
			columns[shortest].push(item);
			heights[shortest] += item.getBoundingClientRect().height;
		});

		container.innerHTML = '';
		container.classList.add('masonry-js');
		columns.forEach((col) => {
			const colEl = document.createElement('div');
			colEl.className = 'masonry-col';
			col.forEach((item) => colEl.appendChild(item));
			container.appendChild(colEl);
		});
	}

	const images = Array.from(container.querySelectorAll('img'));
	let pending = images.length;

	function onImageSettled() {
		pending -= 1;
		if (pending <= 0) layout();
	}

	if (pending === 0) {
		layout();
	} else {
		images.forEach((img) => {
			if (img.complete) {
				onImageSettled();
			} else {
				img.addEventListener('load', onImageSettled, { once: true });
				img.addEventListener('error', onImageSettled, { once: true });
			}
		});
	}

	let resizeTimer: ReturnType<typeof setTimeout>;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(layout, 150);
	});
}
