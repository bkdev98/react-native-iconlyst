import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaTransformBold = ({
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
      d="M20.05 2.683a2.32 2.32 0 0 0-2.563.513l-2.665 2.665c-.093.093-.071.25.037.327A2.48 2.48 0 0 1 15.92 8.22v1.745c0 .082.05.155.125.19a2.5 2.5 0 0 1 .698 4.076l-1.585 1.525a1 1 0 0 1-.073.07l-.002.001a2.488 2.488 0 0 1-1.663.633 2.5 2.5 0 0 1-1.663-.633h-.002v-.002q-.038-.034-.073-.069l-.738-.709c-.09-.087-.237-.07-.315.028a2.486 2.486 0 0 1-4.169-.44c-.066-.131-.244-.17-.348-.067l-2.92 2.92a2.32 2.32 0 0 0-.508 2.565 2.31 2.31 0 0 0 2.17 1.447h14.296a2.35 2.35 0 0 0 2.35-2.349V4.85c0-.967-.556-1.797-1.451-2.167"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.9 14.499.016.016.002.002h.001l.001.002a.752.752 0 0 0 1.001 0l.001-.002.002-.001.001-.001.016-.016 1.59-1.53a.75.75 0 0 0-1.042-1.08l-.318.307V8.22a.75.75 0 0 0-1.5 0v3.976l-.319-.306a.75.75 0 0 0-1.04 1.08zM7.614 9.83l.32-.308v3.988a.75.75 0 0 0 1.5 0V9.524l.317.306a.75.75 0 1 0 1.041-1.08L9.226 7.242a.75.75 0 0 0-.543-.232.8.8 0 0 0-.52.21l-1.59 1.53a.75.75 0 0 0 1.041 1.08"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAntenaTransformBold;
