interface Props {
  width: number;
  height: number;
}

const EmptyPieChart = ({ width, height }: Props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 704 400"
    aria-label="Empty Portfolio Chart"
    aria-hidden="false"
    style={{ maxWidth: '100%' }}
  >
    <g transform="translate(10,47) scale(1 1)" aria-hidden="false">
      <path
        fill="#E5E5E5"
        d="M 341.9676159606125 10.000003297880568 A 159 159 0 1 1 248.4045025531642 40.46641350339843 L 342 169 A 0 0 0 1 0 342 169 Z"
        stroke="#FFF"
        strokeWidth="0"
        strokeLinejoin="round"
        role="img"
      />
      <path
        fill="#F5F5F5"
        d="M 248.5330829159834 40.37288228833873 A 159 159 0 0 1 341.7791521898466 10.000153376662809 L 342 169 A 0 0 0 0 0 342 169 Z"
        stroke="#FFF"
        strokeWidth="0"
        strokeLinejoin="round"
        role="img"
      />
    </g>
  </svg>
);

export default EmptyPieChart;
