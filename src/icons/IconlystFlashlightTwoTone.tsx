import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashlightTwoTone = ({
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
      d="m8.62 15.531-1.134 1.135"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.866 11.726c-.618.619-3.009-.77-5.34-3.103-2.332-2.33-3.72-4.721-3.103-5.34.618-.617 3.009.772 5.34 3.104 2.332 2.33 3.72 4.722 3.103 5.34"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.99 11.6-3.052 3.052a2.72 2.72 0 0 1-1.54.77l-1.783.255a3.06 3.06 0 0 0-1.735.866l-3.499 3.5a3.732 3.732 0 0 1-5.277-5.277l3.5-3.5c.47-.47.773-1.077.867-1.733l.254-1.784a2.72 2.72 0 0 1 .77-1.54l3.052-3.053"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.035 15.82v.01s-.01-.01-.01 0c-.934-.572-2.047-1.465-3.141-2.558-1.103-1.104-1.986-2.218-2.559-3.15"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFlashlightTwoTone;
