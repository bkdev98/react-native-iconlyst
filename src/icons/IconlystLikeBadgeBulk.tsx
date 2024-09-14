import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLikeBadgeBulk = ({
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
      d="M16.713 12.195c-.774 2.357-3.776 3.781-3.904 3.841a.75.75 0 0 1-.635 0c-.129-.061-3.176-1.507-3.907-3.845-.572-1.796.266-3.624 1.91-4.157a3.1 3.1 0 0 1 1.437-.098c.328.055.626.199.877.356.253-.158.546-.3.877-.355.487-.082.98-.047 1.432.094l.01.003c1.64.532 2.476 2.36 1.903 4.161m4.467-2.112-.7-.7a1.7 1.7 0 0 1-.493-1.197v-1a2.7 2.7 0 0 0-2.699-2.699h-1.003c-.45 0-.876-.176-1.196-.494l-.712-.711a2.71 2.71 0 0 0-3.816.012l-.698.698a1.7 1.7 0 0 1-1.197.495h-1a2.7 2.7 0 0 0-2.699 2.65l-.003.049v1c0 .446-.18.883-.494 1.197l-.673.675-.04.036a2.71 2.71 0 0 0 .017 3.817l.698.699c.314.314.494.751.494 1.197v1c0 1.489 1.211 2.7 2.7 2.7h.998c.451 0 .876.175 1.196.494l.71.709a2.68 2.68 0 0 0 1.901.787h.006a2.68 2.68 0 0 0 1.91-.797l.7-.698a1.68 1.68 0 0 1 1.196-.495h1.005a2.705 2.705 0 0 0 2.7-2.7v-1c0-.447.18-.883.493-1.197l.711-.711a2.704 2.704 0 0 0-.012-3.816"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.35 9.461a1.6 1.6 0 0 0-.737-.045c-.19.032-.48.248-.673.392a.75.75 0 0 1-.897 0c-.192-.144-.482-.36-.675-.393a1.7 1.7 0 0 0-.737.047c-.974.316-1.21 1.41-.934 2.277.388 1.241 1.932 2.302 2.792 2.773.698-.386 2.35-1.418 2.797-2.78.273-.859.04-1.95-.936-2.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLikeBadgeBulk;
