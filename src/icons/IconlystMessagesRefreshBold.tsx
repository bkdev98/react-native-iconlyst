import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesRefreshBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.256 16.834a3.97 3.97 0 0 1-3.42-1.932.749.749 0 1 1 1.284-.776 2.48 2.48 0 0 0 2.136 1.208 2.5 2.5 0 0 0 2.493-2.505 2.5 2.5 0 0 0-2.493-2.505c-.407 0-.787.114-1.133.292h.029a.75.75 0 1 1 0 1.5l-1.795.001c-.008 0-.014-.004-.022-.004-.048 0-.095-.017-.143-.029-.05-.01-.1-.018-.146-.039-.008-.004-.017-.003-.025-.007-.036-.018-.06-.048-.09-.07-.035-.025-.074-.04-.105-.07q-.009-.013-.016-.025c-.036-.039-.058-.083-.085-.126-.023-.04-.05-.076-.067-.119-.018-.049-.022-.1-.03-.153-.005-.036-.021-.07-.021-.108V9.574a.75.75 0 0 1 .75-.75.74.74 0 0 1 .728.644 4 4 0 0 1 2.17-.644 4.004 4.004 0 0 1 3.994 4.005 4.003 4.003 0 0 1-3.993 4.005M19.02 6.088A9.42 9.42 0 0 0 12.304 3.3a9.43 9.43 0 0 0-6.72 2.79c-2.806 2.815-3.571 7.136-1.913 10.73.19.476.316.81.316 1.09 0 .334-.141.75-.278 1.151-.265.778-.565 1.662.078 2.308.649.65 1.532.343 2.31.074.398-.136.808-.278 1.133-.28.293 0 .658.147 1.08.318a9.523 9.523 0 0 0 10.711-1.915c3.703-3.716 3.703-9.762 0-13.477"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesRefreshBold;
