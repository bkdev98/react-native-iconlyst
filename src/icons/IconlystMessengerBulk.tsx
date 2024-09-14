import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessengerBulk = ({
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
      d="M21.332 10.187c-.712-3.787-3.736-6.809-7.523-7.519a9.5 9.5 0 0 0-7.857 2.018A9.49 9.49 0 0 0 2.502 12c0 1.423.323 2.837.961 4.196a.55.55 0 0 1 .044.347c-.155.71-.482 2.135-.72 3.156a1.242 1.242 0 0 0 1.52 1.485 225 225 0 0 1 3.07-.75.52.52 0 0 1 .35.052 9.56 9.56 0 0 0 4.275 1.014 9.48 9.48 0 0 0 7.309-3.449 9.52 9.52 0 0 0 2.02-7.864"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.846 14.663 2.548-4.34a.501.501 0 0 0-.658-.699l-2.595 1.323-2.493-1.774c-.115-.082-.26-.112-.395-.082a.5.5 0 0 0-.327.236l-2.548 4.35a.502.502 0 0 0 .659.699l2.596-1.323 2.493 1.765a.5.5 0 0 0 .394.08.5.5 0 0 0 .326-.236"
    />
  </Svg>
);
export default IconlystMessengerBulk;
