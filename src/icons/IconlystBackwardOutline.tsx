import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackwardOutline = ({
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
      d="M8.93 7.167a17.6 17.6 0 0 0-5.155 3.265c-.554.515-.778 1.075-.775 1.581.003.509.234 1.06.773 1.552l.003.003c1.5 1.386 3.226 2.467 5.16 3.267l.007.003c.606.258 1.16.218 1.56.006.39-.207.72-.62.81-1.298.246-2.215.252-4.596-.001-7.09-.084-.665-.39-1.081-.757-1.29-.372-.211-.925-.277-1.626 0m2.366-1.305c.846.48 1.374 1.358 1.506 2.417l.001.017c.265 2.596.26 5.09 0 7.424l-.002.013c-.145 1.115-.733 1.98-1.595 2.436-.851.451-1.883.46-2.846.051-2.085-.862-3.964-2.036-5.6-3.55-.8-.731-1.255-1.663-1.26-2.648-.005-.988.44-1.934 1.257-2.691l.004-.004a19.1 19.1 0 0 1 5.606-3.55l.006-.003c1.036-.412 2.079-.392 2.923.088"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.93 7.167a17.6 17.6 0 0 0-5.155 3.265c-.554.515-.778 1.075-.775 1.581.003.509.234 1.06.773 1.552l.003.003c1.5 1.386 3.226 2.467 5.16 3.267l.007.003c.606.258 1.16.218 1.56.006.39-.207.72-.62.81-1.298.246-2.215.252-4.596-.001-7.09-.084-.665-.39-1.081-.758-1.29-.37-.211-.924-.277-1.625 0m2.366-1.305c.846.48 1.374 1.358 1.506 2.417l.001.017c.265 2.596.26 5.09 0 7.424l-.002.013c-.145 1.115-.733 1.98-1.595 2.436-.851.451-1.883.46-2.846.051-2.085-.862-3.964-2.036-5.6-3.55-.8-.731-1.255-1.663-1.26-2.648-.005-.988.44-1.934 1.257-2.691l.004-.004a19.1 19.1 0 0 1 5.606-3.55l.006-.003c1.036-.412 2.079-.392 2.923.088"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackwardOutline;