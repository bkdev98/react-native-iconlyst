import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerPrivacyBulk = ({
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
      <Path d="M15.9 2.422H8c-3.24 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3v-3.15c0-3.17-2.25-5.3-5.6-5.3M12.13 15.942c-.02-.91-.04-1.85.85-2.74.172-.172.078-.53-.165-.53H2.8a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h5.061c.267 0 .408-.329.243-.538a5.26 5.26 0 0 1-1.154-3.312c0-.77-.01-1.28-.02-1.63" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.6 8.072h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75m-8.7 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75M7.9 17.272h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75M19.98 15.773c-.007.366-.019.915-.019 1.756 0 1.473-1.557 2.256-2.149 2.5-.593-.244-2.15-1.027-2.15-2.5 0-.798-.01-1.333-.019-1.7-.003-.17-.008-.297-.009-.393.536-.246 1.904-.726 2.148-.758.304.033 1.745.538 2.206.745 0 .087-.005.2-.008.35m-2.168-2.594c-.484 0-2.93.82-3.332 1.22-.359.36-.354.638-.336 1.462.007.359.018.885.018 1.668 0 2.919 3.287 3.973 3.427 4.016a.74.74 0 0 0 .445 0c.14-.043 3.427-1.097 3.427-4.016 0-.826.012-1.366.02-1.726.015-.802.02-1.045-.339-1.405-.399-.398-2.846-1.22-3.33-1.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerPrivacyBulk;
