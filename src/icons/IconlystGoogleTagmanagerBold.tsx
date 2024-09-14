import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleTagmanagerBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.38 17.263c.097.003.159-.122.09-.19l-.44-.44-3.777-3.767a.3.3 0 0 1 0-.425l.497-.498 2.297-2.288a.3.3 0 0 0 0-.424L9.52 7.703A3.45 3.45 0 0 1 8.514 5.42c-.005-.09-.115-.136-.18-.073L5.72 7.933l-2.99 2.94c-.23.23-.41.49-.52.78-.15.32-.22.66-.21 1-.01.65.23 1.29.72 1.78l6.649 6.61c.077.077.226-.016.202-.122a3 3 0 0 1-.07-.638c0-1.48 1.323-3.062 2.879-3.02"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.27 10.933-7.51-7.47c-.48-.49-1.13-.73-1.77-.73-.59 0-1.19.21-1.66.63l-.18.18c-.9.97-.87 2.51.07 3.45l1.74 1.74 3.778 3.768a.3.3 0 0 1 0 .425l-.137.137-.347.357-.008.003a.01.01 0 0 0-.009.004l-2.284 2.284a.3.3 0 0 0 0 .425l1.527 1.527c.542.542 1.01 1.427 1.025 2.242.002.095.123.152.19.085l2.585-2.557 2.98-2.94c.24-.23.41-.5.54-.78.13-.32.2-.66.2-1 0-.64-.24-1.29-.73-1.78M12.5 18.283a2 2 0 1 0 0 4c.601 0 1.144-.262 1.514-.68l.03-.041c.028-.04.06-.076.086-.119.24-.33.37-.73.37-1.16v-.07a2 2 0 0 0-2-1.93"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleTagmanagerBold;
