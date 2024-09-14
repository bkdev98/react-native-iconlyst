import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpGraphLineBulk = ({
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
      d="M21 20H5.941C4.871 20 4 19.13 4 18.061V3a1 1 0 1 0-2 0v15.061A3.945 3.945 0 0 0 5.941 22H21a1 1 0 1 0 0-2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.41 13.03a1 1 0 0 0 .695-.28l2.972-2.87 2.782 2.45c.394.346.99.33 1.363-.038l3.416-3.364v.521a1 1 0 1 0 2 0V6.54c0-.022-.012-.04-.013-.063a1 1 0 0 0-.064-.317 1 1 0 0 0-.156-.237c-.02-.027-.03-.06-.055-.084l-.003-.002a1 1 0 0 0-.706-.297h-2.915a1 1 0 1 0 0 2h.471l-2.715 2.674-2.776-2.445a1 1 0 0 0-1.356.031l-3.635 3.51a1 1 0 0 0 .695 1.72"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpGraphLineBulk;
