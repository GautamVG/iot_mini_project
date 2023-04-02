import type { ApexOptions } from 'apexcharts';

function chart(node: HTMLElement, options: ApexOptions) {
	let chart: ApexCharts;

	(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		chart = new ApexCharts(node, options);
		chart.render();
	})();

	return {
		update(newOptions: ApexOptions) {
			chart.updateOptions(options);
			chart.render();
		}
	};
}

export default chart;
