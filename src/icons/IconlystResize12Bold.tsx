import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize12Bold = ({
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
      d="M19.991 15.569a1 1 0 0 0-1-.998h-.002a1 1 0 0 0-.998 1.003l.003 1.255-4.58-4.579 4.58-4.579-.003 1.255a1 1 0 0 0 .998 1.002h.002a1 1 0 0 0 1-.998l.008-3.673q0-.2-.076-.387c-.005-.012-.016-.02-.022-.032a1 1 0 0 0-.194-.293c-.047-.048-.106-.071-.16-.106-.056-.038-.105-.086-.167-.111a1 1 0 0 0-.381-.076h-.002l-3.677.007a1 1 0 0 0 .002 2h.002l1.256-.002L12 10.836l-4.581-4.58 1.256.003h.002a1 1 0 0 0 .001-2l-3.676-.007H5a1 1 0 0 0-1 1.001l.008 3.677a1 1 0 0 0 1 .998h.002a1 1 0 0 0 .998-1.002L6.005 7.67l4.58 4.58-4.58 4.579.003-1.256a.983.983 0 0 0-1-1.002 1 1 0 0 0-1 .998L4 19.247a1 1 0 0 0 .622.926c.05.021.104.02.156.031.073.018.145.045.222.045h.002l3.676-.008a1 1 0 0 0-.001-2h-.002l-1.257.003L12 13.664l4.58 4.58-1.256-.003h-.002a1 1 0 0 0-.002 2l3.678.008H19a1.003 1.003 0 0 0 1-1.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize12Bold;
