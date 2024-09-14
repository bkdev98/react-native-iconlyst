import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadLockBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3.749 11.98c.008-4.538 3.711-8.23 8.254-8.23a8.2 8.2 0 0 1 4.041 1.084 2.4 2.4 0 0 0-.147.805 2.47 2.47 0 0 0 2.467 2.471 2.47 2.47 0 0 0 2.466-2.471 2.466 2.466 0 0 0-2.466-2.46 2.45 2.45 0 0 0-1.41.447 9.7 9.7 0 0 0-4.951-1.376c-5.369 0-9.745 4.364-9.754 9.728a.75.75 0 0 0 1.5.002M21.001 11.25a.75.75 0 0 0-.75.75c0 4.549-3.699 8.25-8.246 8.25a8.2 8.2 0 0 1-3.995-1.06 2.4 2.4 0 0 0 .18-.91 2.47 2.47 0 0 0-2.467-2.47 2.47 2.47 0 0 0-2.466 2.47 2.465 2.465 0 0 0 2.466 2.46c.481 0 .926-.143 1.305-.381a9.7 9.7 0 0 0 4.977 1.391c5.374 0 9.746-4.374 9.746-9.75a.75.75 0 0 0-.75-.75" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.103 10.64c0-1.16-.941-2.1-2.103-2.1s-2.103.94-2.103 2.1c0 .69.34 1.3.859 1.69l-.651 1.96a.89.89 0 0 0 .845 1.17h2.099c.608 0 1.037-.6.845-1.17l-.651-1.96c.519-.39.86-1 .86-1.69"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadLockBulk;
