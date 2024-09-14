import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchWwwOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.22 4.74a7.308 7.308 0 1 0 3.55 10.121.75.75 0 1 1 1.326.7 8.8 8.8 0 0 1-1.243 1.782l2.749 2.742a.75.75 0 0 1-1.06 1.062l-2.786-2.779A8.807 8.807 0 0 1 3.23 7.935a8.808 8.808 0 0 1 14.927-2.032.75.75 0 1 1-1.167.943 7.3 7.3 0 0 0-2.77-2.105m-3.702 4.731a.75.75 0 0 1 .39.986l-.854 1.975a.75.75 0 0 1-1.336.08l-.34-.58-.335.577a.75.75 0 0 1-1.336-.074l-.865-1.974a.75.75 0 1 1 1.374-.602l.27.617.239-.41a.75.75 0 0 1 1.296-.004l.244.416.266-.616a.75.75 0 0 1 .987-.39m5.514 0a.75.75 0 0 1 .39.986l-.854 1.975a.75.75 0 0 1-1.335.08l-.34-.58-.335.577a.75.75 0 0 1-1.336-.074l-.865-1.974a.75.75 0 0 1 1.374-.602l.27.617.239-.41a.75.75 0 0 1 1.296-.004l.244.416.266-.616a.75.75 0 0 1 .986-.39m5.516 0a.75.75 0 0 1 .39.986l-.854 1.975a.75.75 0 0 1-1.335.08l-.34-.58-.335.577a.75.75 0 0 1-1.336-.074l-.865-1.974a.75.75 0 1 1 1.374-.602l.27.617.238-.41a.75.75 0 0 1 1.297-.004l.243.416.267-.616a.75.75 0 0 1 .986-.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchWwwOutline;
