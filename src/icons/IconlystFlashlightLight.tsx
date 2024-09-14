import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashlightLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.98 11.6-3.053 3.052a2.72 2.72 0 0 1-1.54.77l-1.783.255a3.06 3.06 0 0 0-1.734.866l-3.5 3.5a3.732 3.732 0 0 1-5.276-5.277l3.5-3.5c.468-.47.772-1.077.866-1.733l.254-1.784a2.72 2.72 0 0 1 .77-1.54l3.053-3.053M8.61 15.531l-1.134 1.135"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.854 11.726c-.618.619-3.008-.77-5.34-3.103-2.332-2.33-3.72-4.721-3.103-5.34.619-.617 3.01.772 5.34 3.104 2.332 2.33 3.72 4.722 3.103 5.34"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.023 15.82v.01s-.01-.01-.01 0c-.933-.572-2.046-1.465-3.14-2.558-1.104-1.104-1.987-2.218-2.56-3.15"
    />
  </Svg>
);
export default IconlystFlashlightLight;
