import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBreadOutline = ({
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
      fillRule="evenodd"
      d="M19.766 7.02c2.47 3.236 3.147 7.656.749 11.532-.697 1.13-1.828 2.64-3.558 2.97-1.472.29-2.947-.28-4.149-.91-3.622-1.93-6.415-4.74-8.634-8.1-.98-1.48-2.13-3.57-1.496-5.75.283-.98.956-1.77 1.7-2.38a8.9 8.9 0 0 1 2.41-1.35c1.71-.63 3.653-.77 5.42-.5a11.76 11.76 0 0 1 7.45 4.35.7.7 0 0 1 .108.138m.206 3.464a9.6 9.6 0 0 0-1.216-2.325c-.736.054-2.174.373-3.434 1.743a.75.75 0 1 1-1.106-1.01c1.135-1.237 2.4-1.812 3.408-2.062a10.2 10.2 0 0 0-1.812-1.421l-.053-.007h-.042l-.054-.003h-.005l-.004-.001a2 2 0 0 0-.135-.006c-.178 0-.44.01-.751.08-.615.12-1.434.46-2.2 1.31a.759.759 0 0 1-1.06.06.75.75 0 0 1-.055-1.06 5.8 5.8 0 0 1 1.966-1.447q-.695-.21-1.436-.324c-1.55-.23-3.234-.11-4.677.43a7 7 0 0 0-.797.348c-.412.21-.822.466-1.187.763-.607.49-1.036 1.05-1.204 1.62-.424 1.47.319 3.02 1.307 4.52 2.11 3.19 4.728 5.81 8.086 7.59 1.137.6 2.218.95 3.16.77 1.043-.2 1.877-1.17 2.568-2.29a8.22 8.22 0 0 0 1.119-5.823 4 4 0 0 0-.487.113c-.612.18-1.45.55-2.299 1.36a.755.755 0 0 1-1.06-.03.76.76 0 0 1 .03-1.07c1.046-.98 2.102-1.47 2.911-1.7q.283-.083.519-.128"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBreadOutline;
