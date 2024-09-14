import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep2Bulk = ({
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
      d="M19.045 11.123c-.4-.69-.78-1.35-.78-2.9 0-2.82-2.52-5.85-6.27-5.85-1.11 0-2.12.27-2.98.73.53.17.98.56 1.21 1.09a2 2 0 0 1-.19 1.95c.23.33.36.72.36 1.15v.02h2.71c.79 0 1.5.47 1.83 1.19.32.73.18 1.57-.35 2.16l-.25.27c.47.37.77.93.77 1.57a2 2 0 0 1-2 2h-2.9c-.79 0-1.5-.46-1.82-1.19-.32-.72-.19-1.56.34-2.15l.25-.27c-.47-.37-.77-.94-.77-1.58v-.02h-1.89c-.22 0-.44-.04-.64-.11-.12.9-.41 1.42-.72 1.95-.39.67-.79 1.37-.79 2.74v.04c.26 3.12 3.07 3.73 7.83 3.73 4.77 0 7.58-.61 7.84-3.77 0-1.37-.4-2.07-.79-2.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.133 19.102H9.931a.75.75 0 0 0-.586 1.219 3.43 3.43 0 0 0 2.683 1.306 3.44 3.44 0 0 0 2.69-1.306.749.749 0 0 0-.585-1.22M6.317 5.75H6.7l-.939 1.034a.751.751 0 0 0 .556 1.254h2.076a.75.75 0 0 0 0-1.5H8.01l.94-1.034a.751.751 0 0 0-.557-1.254H6.317a.75.75 0 0 0 0 1.5M13.788 9.013a.75.75 0 0 0-.686-.446H10.21a.75.75 0 0 0 0 1.5h1.2l-1.756 1.935a.752.752 0 0 0 .556 1.254h2.892a.75.75 0 1 0 0-1.5h-1.2l1.756-1.935a.75.75 0 0 0 .13-.808"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep2Bulk;
