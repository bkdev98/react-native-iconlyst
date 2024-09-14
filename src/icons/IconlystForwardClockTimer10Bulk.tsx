import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer10Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20.84 8.728a1 1 0 0 0 1-1v-2.99a1 1 0 0 0-2 0v.438c-2.72-2.802-6.954-3.832-10.734-2.37-5.118 1.982-7.68 7.76-5.713 12.88.95 2.469 2.816 4.43 5.255 5.525q.201.088.41.088a1 1 0 0 0 .408-1.913c-1.954-.877-3.448-2.446-4.206-4.417-1.574-4.093.476-8.713 4.568-10.298 3.09-1.197 6.558-.303 8.723 2.057h-.685a1 1 0 0 0 0 2z" />
      <Path d="M13.732 12.098v-4.18a1 1 0 0 0-2 0v3.18H9.286a1 1 0 0 0 0 2h3.446a1 1 0 0 0 1-1" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.405 14.445a1 1 0 0 0-1.06.126l-1.69 1.37a.999.999 0 1 0 1.258 1.554l.062-.05v3.303a1 1 0 0 0 2 0v-5.4a1 1 0 0 0-.57-.903M20.726 19.128a.73.73 0 0 1-1.458 0v-2.38a.73.73 0 0 1 .73-.73.73.73 0 0 1 .728.73zm-.729-5.11a2.733 2.733 0 0 0-2.729 2.73v2.38a2.733 2.733 0 0 0 2.73 2.73 2.733 2.733 0 0 0 2.728-2.73v-2.38a2.733 2.733 0 0 0-2.729-2.73"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForwardClockTimer10Bulk;
