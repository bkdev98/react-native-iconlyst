import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAuthereumBold = ({
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
      d="M14.759 2.285a.199.199 0 0 0-.24.276c.214.438.55 1.122.768 1.521a.52.52 0 0 0 .274.223c.86.283 1.725.56 2.593.82.187.057.233.145.233.328-.006 1.902.002 3.805-.008 5.708a7 7 0 0 1-.101 1.134c-.295 1.72-1.143 3.138-2.434 4.286-1.221 1.086-2.471 2.14-3.705 3.21a.22.22 0 0 1-.127.061.22.22 0 0 1-.126-.06c-1.234-1.072-2.484-2.125-3.705-3.21-1.291-1.149-2.14-2.567-2.434-4.287a7 7 0 0 1-.101-1.134c-.01-1.903-.002-3.806-.008-5.708-.001-.183.046-.27.233-.328a107 107 0 0 0 2.593-.82.52.52 0 0 0 .274-.223c.266-.488.523-.983.767-1.501.076-.16-.084-.345-.254-.291L4.123 3.9a.3.3 0 0 0-.207.285v7.138c.014.105.104 1.065.174 1.432.405 2.105 1.48 3.828 3.084 5.23 1.08.946 2.174 1.878 3.262 2.817.383.33 1.061.903 1.389 1.174.108.09.266.09.374 0 .328-.27 1.006-.843 1.389-1.174 1.089-.939 2.18-1.87 3.263-2.817 1.603-1.402 2.679-3.125 3.083-5.23.07-.367.108-.742.133-1.119.012-.093.035-6.213.04-7.453a.3.3 0 0 0-.21-.284z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.295 11.045a.63.63 0 0 0-.055.323q.11 1.356.88 2.477c.069.103.222.086.279-.023l1.33-2.539 2.283-4.258 2.283 4.258 1.33 2.539c.057.109.21.126.279.023a5 5 0 0 0 .88-2.477.6.6 0 0 0-.055-.323c-.05-.095-3.744-7.046-4.559-8.538a.176.176 0 0 0-.316 0 1855 1855 0 0 0-4.559 8.538"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.213 11.14c-.079-.149-.323-.149-.402 0a233 233 0 0 0-2.109 4.118c-.024.05.006.165.051.204.7.61 1.409 1.21 2.11 1.819.057.049.104.067.149.062.045.005.092-.013.149-.062.701-.61 1.41-1.21 2.11-1.82.045-.038.075-.153.051-.203a232 232 0 0 0-2.11-4.118"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAuthereumBold;