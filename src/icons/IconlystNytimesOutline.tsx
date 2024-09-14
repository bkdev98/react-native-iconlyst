import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNytimesOutline = ({
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
      d="M12.042 4.992a.75.75 0 0 1-.654.835 7.237 7.237 0 1 0 7.875 9.013.75.75 0 1 1 1.451.38 8.737 8.737 0 1 1-9.507-10.882.75.75 0 0 1 .835.654"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.641 9.37a.75.75 0 0 1 .37.646v10.98a.75.75 0 0 1-1.5 0v-9.709L4.778 15.01a.75.75 0 1 1-.726-1.313l7.844-4.337a.75.75 0 0 1 .744.01M16.139 7.093c1.014.447 1.755.454 2.392-.017a1.746 1.746 0 0 0-1.038-3.15.75.75 0 0 1 0-1.5 3.246 3.246 0 0 1 1.931 5.855c-1.257.931-2.64.735-3.89.185-1.121-.494-2.29-1.338-3.396-2.138l-.294-.212c-1.237-.891-2.4-1.695-3.507-2.1-1.067-.392-1.983-.38-2.845.235a1.746 1.746 0 0 0 .55 3.104.75.75 0 0 1-.398 1.446A3.246 3.246 0 0 1 4.62 3.03c1.386-.991 2.86-.927 4.234-.424 1.332.488 2.659 1.421 3.867 2.292l.26.188c1.15.83 2.19 1.58 3.158 2.006"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.266 11.043a.75.75 0 0 1 .75.75v8.474a.75.75 0 1 1-1.5 0v-8.474a.75.75 0 0 1 .75-.75M15.291 12.836a.957.957 0 1 1 1.914 0 .957.957 0 0 1-1.914 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNytimesOutline;
