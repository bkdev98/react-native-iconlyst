import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDnaBold = ({
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
      d="M12.924 11.077c-.07-.844-.12-1.658-.085-2.445l2.53 2.528c-.787.034-1.601-.014-2.445-.084M8.63 12.839c.787-.034 1.601.013 2.447.085.07.846.119 1.66.083 2.45zm13.077-2.383a1 1 0 0 0 0-1.413.99.99 0 0 0-1.241-.115l-2.234-2.235a.999.999 0 1 0-1.415 1.415l2.06 2.06a6.4 6.4 0 0 1-1.13.542l-4.459-4.458c.14-.38.316-.757.542-1.13l.603.604a1 1 0 0 0 1.414-1.413l-.777-.777a.986.986 0 0 0-.114-1.243 1 1 0 0 0-1.414 0c-1.24 1.24-1.936 2.54-2.312 3.853q-.007.022-.012.045c-.446 1.584-.43 3.183-.316 4.712-1.514-.112-3.097-.129-4.666.303-.035.011-.07.014-.104.029-1.306.378-2.603 1.072-3.84 2.308a1 1 0 0 0 .708 1.707 1 1 0 0 0 .534-.178l2.234 2.235a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-2.06-2.062a6.4 6.4 0 0 1 1.13-.54l4.457 4.46c-.14.38-.315.756-.54 1.127l-.604-.605a.999.999 0 1 0-1.414 1.415l.778.777a.986.986 0 0 0 .113 1.241.997.997 0 0 0 1.415 0c2.75-2.747 2.848-5.8 2.64-8.61 1.512.111 3.094.13 4.664-.303.035-.01.07-.013.104-.028 1.308-.378 2.605-1.072 3.842-2.309"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDnaBold;
