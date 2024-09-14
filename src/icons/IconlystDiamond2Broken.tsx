import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamond2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.581 15.455-2.38 5.098a.774.774 0 0 1-1.403 0L9.42 15.455a.77.77 0 0 0-.375-.374l-5.098-2.38a.774.774 0 0 1 0-1.403l5.098-2.38a.77.77 0 0 0 .375-.373l2.378-5.098a.774.774 0 0 1 1.403 0l2.38 5.098a.77.77 0 0 0 .375.374l5.097 2.38a.774.774 0 0 1 0 1.402l-2.549 1.19"
    />
  </Svg>
);
export default IconlystDiamond2Broken;
