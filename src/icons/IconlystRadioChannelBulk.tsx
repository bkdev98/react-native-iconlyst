import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioChannelBulk = ({
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
      d="M15.367 4.455H7.183c-2.569 0-4.363 1.868-4.363 4.544v6.002c0 2.676 1.794 4.545 4.362 4.545H17.96c2.568 0 4.361-1.869 4.361-4.545V9c0-2.676-1.793-4.545-4.36-4.545h-2.593"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.117 6.648h-3.094a.64.64 0 0 1-.61-.428l-.64-1.765H8.229a.8.8 0 0 0 .035.231l.738 2.04a2.15 2.15 0 0 0 2.022 1.421h3.094c.906 0 1.718-.57 2.02-1.417l.741-2.044a.7.7 0 0 0 .035-.232h-1.546l-.641 1.769a.64.64 0 0 1-.61.425"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.917 15.148q.01 0 .019-.006l.017-.006a2.23 2.23 0 0 0 1.98-2.209 2.23 2.23 0 0 0-1.972-2.208l-.02-.007q-.011-.006-.024-.008L9.76 9.831a.1.1 0 0 0-.033.003q-.015.004-.031.003L9.6 9.825a2 2 0 0 0-.264-.024 3.13 3.13 0 0 0-3.127 3.127 3.13 3.13 0 0 0 3.127 3.127c.072 0 .142-.01.212-.02l.102-.012.009.002.01.002q.046 0 .091-.006zm-7.253-.625H9.66a1.629 1.629 0 0 1-1.951-1.594c0-.898.73-1.628 1.627-1.628a1.628 1.628 0 0 1 .328 3.222m2.511-2.885c.18.395.286.829.286 1.29 0 .46-.105.894-.284 1.288l2.524-.308a2.2 2.2 0 0 1-.236-.981c0-.353.09-.684.237-.981zm3.79 1.289a.734.734 0 1 1 1.469 0 .734.734 0 0 1-1.47 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRadioChannelBulk;
