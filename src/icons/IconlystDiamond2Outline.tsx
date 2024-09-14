import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamond2Outline = ({
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
      d="M12.25 21.75a1.51 1.51 0 0 1-1.381-.88l-2.38-5.1-5.11-2.39a1.523 1.523 0 0 1 0-2.763l5.1-2.379 2.39-5.109a1.525 1.525 0 0 1 2.763 0l2.38 5.1 5.108 2.39a1.524 1.524 0 0 1 0 2.763l-5.1 2.38-2.39 5.11a1.52 1.52 0 0 1-1.38.877m-.7-18.308.68.317-2.378 5.1a1.54 1.54 0 0 1-.74.737l-5.1 2.38 5.1 2.422c.323.151.583.41.737.731l2.38 5.1 2.423-5.1a1.53 1.53 0 0 1 .74-.737l5.094-2.378-5.1-2.424a1.53 1.53 0 0 1-.737-.735l-2.38-5.1z"
    />
  </Svg>
);
export default IconlystDiamond2Outline;
