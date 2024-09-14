import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStripeLight = ({
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
      d="M10.707 8.37c0-.795.596-1.094 1.69-1.094 1.293 0 2.785.299 4.177.895.298.1.696-.1.696-.497V4.293c0-.2-.1-.398-.298-.497C15.48 3.199 13.988 3 12.397 3 8.42 3 5.734 5.088 5.734 8.57c0 5.469 7.061 4.574 7.061 6.96 0 .995-.398 1.194-1.492 1.194-1.392 0-3.182-.497-4.674-1.194-.298-.198-.596 0-.596.398v3.58c0 .2.1.398.298.498 1.69.696 3.48.994 5.072.994 4.077 0 6.862-1.989 6.862-5.57-.1-5.966-7.558-4.872-7.558-7.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStripeLight;
