import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkCheckBulk = ({
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
      d="M4.671 21.094a1.38 1.38 0 0 0 1.657.229l5.697-3.194 5.642 3.187c.322.183.696.227 1.052.128a1.386 1.386 0 0 0 1.013-1.332l-.005-13.526c0-2.635-1.694-4.086-4.77-4.086H9.04c-3.033 0-4.772 1.427-4.772 3.915v13.701a1.37 1.37 0 0 0 .403.978"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.964 13.414a.74.74 0 0 1-.53-.22l-2.069-2.067a.75.75 0 1 1 1.061-1.061l1.538 1.537 3.606-3.604a.75.75 0 1 1 1.061 1.061l-4.137 4.134a.74.74 0 0 1-.53.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkCheckBulk;
