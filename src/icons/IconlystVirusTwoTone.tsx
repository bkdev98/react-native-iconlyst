import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusTwoTone = ({
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
      d="M8.283 3.283h8.435c2.948 0 4.782 2.08 4.782 5.027v7.947c0 2.945-1.834 5.026-4.783 5.026H8.283c-2.948 0-4.783-2.08-4.783-5.026V8.31c0-2.947 1.844-5.027 4.783-5.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.829 16.26h-.657a2.25 2.25 0 0 1-2.25-2.25v-1.49a2.25 2.25 0 0 1 2.25-2.248h.657a2.25 2.25 0 0 1 2.25 2.249v1.49a2.25 2.25 0 0 1-2.25 2.25"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.008 8.771.11.645c.1.593.504 1.09 1.065 1.313l1.174.458M9.923 12.518c-.8-.061-1.597-.138-2.523.234M8.008 16.478l.112-.645a1.72 1.72 0 0 1 1.064-1.309l.756-.292M15.066 14.232l.748.292c.561.225.966.72 1.071 1.31l.104.644M15.08 12.518c.801-.061 1.597-.138 2.523.234M16.994 8.771l-.11.645a1.72 1.72 0 0 1-1.065 1.313l-1.174.458M11.004 10.601V9.582a1.497 1.497 0 1 1 2.994 0v1.019"
    />
  </Svg>
);
export default IconlystVirusTwoTone;
