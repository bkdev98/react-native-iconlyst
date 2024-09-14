import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart4TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.304 18.496c4.258-.511 7.74-3.56 7.29-8.135-.373-3.77-3.396-6.885-7.16-7.307-4.962-.558-8.88 3.288-9.106 8.098-.22 4.726 3.623 8.622 7.878 9.83.322.09.64-.166.64-.501v-1.482a.51.51 0 0 1 .458-.503"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.438 11.694c-.357-1.116.06-2.39 1.231-2.767a2 2 0 0 1 1.808.304 2.01 2.01 0 0 1 1.804-.304c1.17.377 1.59 1.651 1.233 2.767-.555 1.767-3.037 3.13-3.037 3.13s-2.464-1.342-3.039-3.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart4TwoTone;
