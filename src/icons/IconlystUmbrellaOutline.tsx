import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaOutline = ({
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
      d="M4.869 12.403a8 8 0 0 1 1.6.285 6.2 6.2 0 0 1 1.598.75c1.703-.635 3.108-.97 4.543-.967 1.431.004 2.834.344 4.53.966.563-.377 1.092-.639 1.68-.809.481-.138.98-.21 1.537-.245a7.777 7.777 0 0 0-15.488.02m-1.531.7a9.276 9.276 0 1 1 18.552 0 .75.75 0 0 1-.737.75c-.844.015-1.417.072-1.917.217-.488.14-.95.377-1.545.813a.75.75 0 0 1-.71.096c-1.798-.685-3.103-1.005-4.375-1.008-1.27-.002-2.572.31-4.364 1.006a.75.75 0 0 1-.701-.085c-.552-.386-1.002-.617-1.503-.767-.51-.153-1.112-.233-1.984-.273a.75.75 0 0 1-.716-.749"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.113 4.017-.499.56-.53-.531a.75.75 0 0 1 1.03-.029m-.476 1.675-.015.017a14 14 0 0 0-1.204 1.788c-.88 1.551-1.751 3.76-1.751 6.427a.75.75 0 0 1-1.5 0c0-2.997.978-5.461 1.946-7.167.485-.855.97-1.525 1.337-1.984a11 11 0 0 1 .618-.71l.01-.011.004-.004.002-.001v-.001l.53.531.5-.56v.001l.002.002.004.003.012.011a4 4 0 0 1 .174.169c.112.113.269.279.455.495.371.433.86 1.07 1.349 1.905.977 1.672 1.951 4.138 1.951 7.321a.75.75 0 0 1-1.5 0c0-2.866-.875-5.074-1.746-6.563a11.6 11.6 0 0 0-1.178-1.67"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 12.488a.75.75 0 0 1 .75.75v6.099a2.414 2.414 0 1 1-4.827 0v-.308a.75.75 0 0 1 1.5 0v.308a.914.914 0 0 0 1.827 0v-6.099a.75.75 0 0 1 .75-.75M12.614 2.25a.75.75 0 0 1 .75.75v1.577a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrellaOutline;
