import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPythonTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.959 7.96V5.542A2.543 2.543 0 0 1 10.501 3h2.997a2.543 2.543 0 0 1 2.543 2.543v4.114A2.35 2.35 0 0 1 13.698 12h-3.396a2.35 2.35 0 0 0-2.343 2.343v4.115A2.543 2.543 0 0 0 10.501 21h2.997a2.543 2.543 0 0 0 2.543-2.542V16.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.2 18.5h-.01M10.8 5.5h.01M12 7.96H5.542A2.543 2.543 0 0 0 3 10.504V13.5a2.543 2.543 0 0 0 2.542 2.543H7.96M16.04 7.96h2.418A2.543 2.543 0 0 1 21 10.504V13.5a2.543 2.543 0 0 1-2.542 2.543H12"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPythonTwoTone;
