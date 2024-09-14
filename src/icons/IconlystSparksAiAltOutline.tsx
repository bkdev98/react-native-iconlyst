import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSparksAiAltOutline = ({
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
      d="M9.218 2.258a.75.75 0 0 1 .714.519 8.92 8.92 0 0 0 5.736 5.736.75.75 0 0 1 0 1.427 8.92 8.92 0 0 0-5.736 5.737.75.75 0 0 1-1.427 0A8.92 8.92 0 0 0 2.769 9.94a.75.75 0 0 1 0-1.427 8.92 8.92 0 0 0 5.736-5.736.75.75 0 0 1 .713-.519M4.913 9.227a10.42 10.42 0 0 1 4.305 4.305 10.42 10.42 0 0 1 4.306-4.305A10.43 10.43 0 0 1 9.218 4.92a10.43 10.43 0 0 1-4.305 4.306M17.571 13.383a.75.75 0 0 1 .714.52 4.58 4.58 0 0 0 2.946 2.946.75.75 0 0 1 0 1.427 4.58 4.58 0 0 0-2.946 2.947.75.75 0 0 1-1.427 0 4.58 4.58 0 0 0-2.947-2.947.75.75 0 0 1 0-1.427 4.58 4.58 0 0 0 2.947-2.947.75.75 0 0 1 .713-.519m-1.717 4.18a6.1 6.1 0 0 1 1.717 1.716 6.1 6.1 0 0 1 1.717-1.717 6.1 6.1 0 0 1-1.717-1.717 6.1 6.1 0 0 1-1.717 1.717"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSparksAiAltOutline;
