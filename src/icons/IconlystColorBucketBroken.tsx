import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorBucketBroken = ({
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
      d="m19.372 12.5-8.616 6.568c-.78.603-1.823.699-2.718.291a9.9 9.9 0 0 1-2.806-1.979 10 10 0 0 1-1.987-2.813 2.66 2.66 0 0 1 .292-2.718L4.956 9.99M10.112 3.238 6.824 7.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.153 20.98c-1.563 0-2.267-1.79-1.592-2.878.628-.931 1.592-1.575 1.592-1.575s.963.643 1.592 1.575c.675 1.088-.03 2.878-1.592 2.878"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.19 6.423c-2.556-2.557-5.278-3.98-6.077-3.181-.8.8.625 3.52 3.181 6.077s5.278 3.981 6.078 3.182c.542-.543.062-1.967-1.1-3.625"
    />
  </Svg>
);
export default IconlystColorBucketBroken;
