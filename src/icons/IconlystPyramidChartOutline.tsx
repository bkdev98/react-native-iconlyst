import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPyramidChartOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.935 15.531h15.098v1.5H4.935zM7.098 11.693H17.85v1.5H7.098zM9.341 7.856h6.488v1.5H9.341z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.793 4.967a.484.484 0 0 0-.586 0s-.038.033-.133.178c-.098.15-.218.358-.4.675L4.716 17.947c-.18.313-.298.52-.377.679-.077.153-.085.202-.085.202a.48.48 0 0 0 .292.503s.047.017.218.027c.178.01.416.01.778.01h13.917c.361 0 .6 0 .777-.01.171-.01.219-.027.219-.027a.48.48 0 0 0 .291-.503s-.009-.05-.085-.202c-.079-.16-.197-.366-.377-.679L13.326 5.82a15 15 0 0 0-.4-.675c-.095-.145-.133-.177-.133-.178m-1.495-1.193c.71-.54 1.694-.54 2.404 0 .203.155.353.357.48.55.124.19.266.438.434.73l6.98 12.166c.166.289.307.534.408.737.102.204.2.434.231.686a1.98 1.98 0 0 1-1.2 2.071 2.2 2.2 0 0 1-.712.141c-.226.014-.509.014-.842.014H5.519c-.333 0-.616 0-.842-.014a2.2 2.2 0 0 1-.711-.14 1.98 1.98 0 0 1-1.2-2.072c.03-.252.128-.482.23-.686.102-.203.242-.448.408-.737l6.98-12.166c.168-.292.31-.54.435-.73a2.2 2.2 0 0 1 .48-.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPyramidChartOutline;
