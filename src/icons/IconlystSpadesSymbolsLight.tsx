import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesSymbolsLight = ({
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
      d="M10.606 16.687c-.894.606-2.014 1.11-3.813.658-1.81-.36-2.878-2.282-3.063-3.988-.247-2.343 1.15-4.265 2.837-5.714l5.437-4.677 5.437 4.677c1.439 1.15 2.672 2.785 2.836 4.666.042.452.02.925-.051 1.377-.277 1.665-1.316 3.237-3.011 3.659-1.79.452-2.9-.041-3.793-.637-.022 1.584.846 3.045 1.384 3.796.151.211 0 .53-.259.53h-5.08c-.258 0-.409-.317-.258-.528.54-.756 1.418-2.23 1.397-3.82"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpadesSymbolsLight;
