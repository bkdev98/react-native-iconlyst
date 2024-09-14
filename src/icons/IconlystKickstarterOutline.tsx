import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKickstarterOutline = ({
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
      d="M4.583 6.4c0-1.768 1.484-3.15 3.25-3.15s3.25 1.382 3.25 3.15V7.91l2.43-3.33c1.034-1.418 3.048-1.75 4.506-.77 1.475.993 1.85 2.97.8 4.408L16.063 12l2.758 3.781c1.049 1.438.674 3.415-.802 4.407-1.457.98-3.47.65-4.506-.77l-2.429-3.33V17.6c0 1.768-1.484 3.15-3.25 3.15s-3.25-1.382-3.25-3.15zm3.25-1.65c-.996 0-1.75.767-1.75 1.65v11.2c0 .883.754 1.65 1.75 1.65s1.75-.767 1.75-1.65v-3.812a.75.75 0 0 1 1.357-.442l3.784 5.188c.549.753 1.653.95 2.458.41.786-.53.961-1.545.426-2.279l-3.08-4.223a.75.75 0 0 1 0-.884l3.08-4.223c.535-.734.36-1.75-.426-2.278-.805-.541-1.909-.344-2.458.409l-3.784 5.188a.75.75 0 0 1-1.356-.442V6.4c0-.883-.755-1.65-1.75-1.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKickstarterOutline;
