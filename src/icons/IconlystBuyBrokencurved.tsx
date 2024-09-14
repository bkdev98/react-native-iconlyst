import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBrokencurved = ({
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
      d="M9.257 7.177c2.31-.11 5.478-.375 6.551-.39 1.025-.012 2.135-.146 3.098.287 3.303 1.487 1.91 7.462-.373 9.236-1.591 1.236-4.135 1.328-6.066 1.278-1.792-.045-3.954-.25-5.462-1.324C4.406 14.413 5.764 9.369 5.679 5.92c.051-1.93-2.044-2.243-2.044-2.243M13.135 10.677h2.773"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.399 20.304a.545.545 0 1 1-.001 1.089.545.545 0 0 1 0-1.09"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.399 20.304a.545.545 0 1 1-.001 1.089.545.545 0 0 1 0-1.09"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.73 20.304a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.73 20.304a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuyBrokencurved;
