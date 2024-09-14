import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftCardBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.75 9.23V16c0 2.86-1.75 4.78-4.37 4.78H6.6c-2.6 0-4.35-1.92-4.35-4.78V9.23C2.25 6.37 4 4.45 6.6 4.45h10.78c2.62 0 4.37 1.92 4.37 4.78"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.95 15.98c.39-.56.75-1.17 1.07-1.82.11-.24.1-.51-.04-.73a.7.7 0 0 0-.51-.34c.52-.74 1.03-1.54 1.53-2.43.5.89 1 1.69 1.53 2.43a.7.7 0 0 0-.51.34c-.14.22-.15.49-.04.73.32.65.68 1.26 1.07 1.82zm6.22.24c-.45-.49-.87-1.04-1.24-1.64h.13c.3 0 .56-.17.68-.44.13-.27.08-.58-.11-.8-1.05-1.24-2.02-2.75-2.96-4.63A.76.76 0 0 0 12 8.3a.76.76 0 0 0-.67.41c-.94 1.89-1.91 3.4-2.96 4.63-.19.22-.24.53-.12.8.13.27.39.44.69.44h.13c-.37.6-.79 1.15-1.24 1.64a.75.75 0 0 0 .55 1.26h2.87v3.3h1.5v-3.3h2.87a.75.75 0 0 0 .55-1.26M6.453 12.372a.744.744 0 0 0-1.055-.021.755.755 0 0 0 .522 1.297.75.75 0 0 0 .543-1.267zM18.994 14.421l-.01-.01a.743.743 0 0 0-1.055.005.756.756 0 0 0 .535 1.285.75.75 0 0 0 .53-1.28M7.98 8.531l-.01-.01a.745.745 0 0 0-1.056.005.757.757 0 0 0 .005 1.066.751.751 0 0 0 1.061-1.06M17.841 9.982h.245a.75.75 0 0 0 0-1.5h-.245v-.244a.75.75 0 0 0-1.5 0v.244h-.245a.75.75 0 0 0 0 1.5h.245v.246a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftCardBulk;
