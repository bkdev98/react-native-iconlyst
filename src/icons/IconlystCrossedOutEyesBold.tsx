import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossedOutEyesBold = ({
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
      d="M12 13.338c-.58 0-1.051.47-1.051 1.05v.767c0 .579.472 1.05 1.05 1.05.58 0 1.052-.471 1.052-1.05v-.766c0-.58-.472-1.051-1.051-1.051"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.568 10.076a.75.75 0 0 1-1.061 0l-.511-.512-.509.509a.75.75 0 0 1-1.061-1.06l.509-.509-.509-.509a.75.75 0 1 1 1.061-1.061l.509.51.509-.509a.749.749 0 1 1 1.06 1.061l-.509.508.512.511a.75.75 0 0 1 0 1.061m-2.018 5.079A2.554 2.554 0 0 1 12 17.706a2.554 2.554 0 0 1-2.551-2.551v-.767A2.553 2.553 0 0 1 12 11.838a2.553 2.553 0 0 1 2.55 2.55zm-6.055-5.082a.75.75 0 0 1-1.061-1.06l.508-.508-.51-.51a.75.75 0 1 1 1.061-1.061l.51.51.508-.509a.75.75 0 1 1 1.061 1.061l-.509.509.511.51a.75.75 0 1 1-1.061 1.061l-.51-.511zM16.216 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.947c0 3.306 2.123 5.527 5.282 5.527h8.433c3.161 0 5.285-2.221 5.285-5.527V8.026c0-3.305-2.123-5.526-5.284-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossedOutEyesBold;
