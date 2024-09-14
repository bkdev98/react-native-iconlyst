import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagOutline = ({
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
      d="M8.255 2.768a2.04 2.04 0 0 1 1.357-.518h4.775c.502 0 .984.185 1.358.518l1.485 1.33c.43.386.678.938.678 1.516v2.204h.592a2.334 2.334 0 0 1 2.334 2.334v7.693c0 .632-.258 1.235-.708 1.674l-1.618 1.57a2.34 2.34 0 0 1-1.625.66H7.117c-.607 0-1.19-.237-1.626-.66l-1.618-1.57a2.34 2.34 0 0 1-.707-1.674v-7.693A2.334 2.334 0 0 1 5.5 7.818h.592V5.614c0-.578.246-1.13.677-1.516zm-1.436 6.55H18.5c.46 0 .834.373.834.834v7.693c0 .224-.092.44-.254.599l-1.616 1.569a.84.84 0 0 1-.581.235H7.117a.84.84 0 0 1-.581-.236L4.92 18.444a.84.84 0 0 1-.254-.599v-7.693c0-.46.374-.834.834-.834zm9.589-1.5V5.614a.54.54 0 0 0-.179-.399l-.811-.726v3.329zm-2.49 0V6.232h-3.836v1.586zm-5.336 0h-.99V5.614c0-.15.064-.296.178-.398l.812-.727zm1.5-3.086h3.836V3.75h-3.836z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBagOutline;
