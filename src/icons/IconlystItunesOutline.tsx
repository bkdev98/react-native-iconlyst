import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItunesOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.483 6.913a.75.75 0 0 1-.586.884q-2.341.476-4.675.945-2.768.556-5.54 1.12a.75.75 0 0 1-.3-1.47c1.845-.376 3.698-.75 5.55-1.122q2.337-.47 4.666-.942a.75.75 0 0 1 .885.585"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.386 2.285c1.08-.219 2.1.601 2.101 1.713.003 2.523.008 8.348.008 11.65.02.655-.04 1.445-.432 2.157l-.006.01c-.417.729-1.143 1.233-1.894 1.506s-1.62.35-2.395.116a2.89 2.89 0 0 1-2.044-2.542v-.001a2.93 2.93 0 0 1 1.325-2.619c.66-.428 1.405-.554 2.041-.62q.35-.034.643-.056c.392-.03.728-.056 1.066-.13a2 2 0 0 0 .178-.053l.018-.007-.008-9.41a.25.25 0 0 0-.303-.243L10.477 5.42a.25.25 0 0 0-.203.248c.001 2.257.005 8.625.005 12.146.02.655-.04 1.445-.432 2.157l-.006.01c-.426.744-1.139 1.256-1.895 1.528-.755.272-1.616.329-2.395.094a2.89 2.89 0 0 1-2.044-2.542v-.001a2.93 2.93 0 0 1 1.325-2.618c.66-.428 1.406-.555 2.042-.621a24 24 0 0 1 .643-.056c.392-.03.728-.056 1.065-.13a2 2 0 0 0 .196-.06c0-3.528-.003-8.073-.004-9.906 0-.835.587-1.553 1.405-1.719zm-9.607 14.84c-.414.08-.87.116-1.272.147q-.26.02-.479.041c-.585.06-1.032.161-1.382.388l-.005.004c-.409.26-.667.77-.637 1.261.035.536.448 1.049.965 1.196l.012.004c.433.131.963.11 1.457-.068.49-.177.883-.485 1.098-.857.2-.365.261-.836.243-1.391v-.724m10.216-2.165c-.413.08-.87.115-1.271.146-.172.013-.335.026-.48.041-.584.06-1.031.161-1.381.388l-.006.004c-.408.26-.666.77-.636 1.261.035.536.447 1.049.964 1.196l.012.004c.408.123.942.097 1.454-.088.51-.186.904-.496 1.102-.837.2-.365.26-.837.243-1.391v-.724"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystItunesOutline;
