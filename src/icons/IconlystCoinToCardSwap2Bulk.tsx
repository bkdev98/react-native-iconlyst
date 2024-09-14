import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinToCardSwap2Bulk = ({
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
      d="M12.553 14.806a.19.19 0 0 1-.193.21H2.72a.19.19 0 0 1-.192-.21c.154-1.316 1.132-2.21 2.472-2.21h5.08c1.34 0 2.32.894 2.473 2.21M12.38 16.516c.11 0 .2.09.2.2v1.8c0 1.53-1.03 2.6-2.5 2.6H5c-1.47 0-2.5-1.07-2.5-2.6v-1.8c0-.11.09-.2.2-.2zM20.669 7.14a3.8 3.8 0 1 0-7.6-.001 3.8 3.8 0 0 0 7.6 0"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4.36 9.92a.75.75 0 0 0 .576-.27l1.358-1.62a.751.751 0 0 0-.576-1.231h-.61v-.03a2.65 2.65 0 0 1 2.647-2.64.75.75 0 0 0 0-1.5 4.15 4.15 0 0 0-4.147 4.14v.03h-.606a.751.751 0 0 0-.575 1.23l1.36 1.622c.14.17.352.269.574.269M21.592 15.991l-1.358-1.762c-.284-.369-.905-.369-1.188 0l-1.358 1.762a.75.75 0 0 0 .593 1.208h.61v.02a2.65 2.65 0 0 1-2.647 2.65.75.75 0 0 0 0 1.5 4.154 4.154 0 0 0 4.147-4.15v-.02h.607a.749.749 0 0 0 .594-1.208" />
    </G>
  </Svg>
);
export default IconlystCoinToCardSwap2Bulk;
