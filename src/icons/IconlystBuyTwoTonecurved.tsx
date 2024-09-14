import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyTwoTonecurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.409 7.642c2.31-.109 4.619-.222 6.93-.304 1.073-.038 2.146-.071 3.219-.085 1.025-.013 2.135-.147 3.098.286 3.303 1.487 1.91 7.462-.373 9.236-1.591 1.236-4.135 1.328-6.066 1.278-1.792-.045-3.954-.25-5.462-1.324-2.599-1.851-1.241-6.895-1.326-10.344.051-1.93-2.044-2.243-2.044-2.243"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.885 11.142h2.773"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.149 20.769a.545.545 0 1 1-.001 1.089.545.545 0 0 1 .001-1.09M17.48 20.769a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBuyTwoTonecurved;
