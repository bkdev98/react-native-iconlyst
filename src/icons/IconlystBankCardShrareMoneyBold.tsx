import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardShrareMoneyBold = ({
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
      d="M21.196 8.076c0-2.793-1.794-4.67-4.464-4.67H6.662c-2.67 0-4.464 1.877-4.464 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM11.245 13.655l1.65-1.59.09-.09c.06-.06.12-.11.19-.16.06-.05.13-.1.2-.14.14-.09.28-.16.43-.22.07-.03.14-.06.22-.08.6-.17 1.26-.12 1.83.18a.7.7 0 0 1 .19.104l.043.03q.196.116.367.286l.03.03.572.55c.13.127.343.107.47-.024a2.47 2.47 0 0 1 1.788-.756c.465 0 .9.127 1.272.348.238.14.608-.014.608-.29v-1.578a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3v4.4c0 2.79 1.8 4.67 4.47 4.67h5.25a.3.3 0 0 0 .3-.3v-.97a.33.33 0 0 0-.207-.295 2.45 2.45 0 0 1-.823-.565c-.96-1-.93-2.58.06-3.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.594 17.644a.75.75 0 0 0-1.061-.018l-.466.452v-3.803a.75.75 0 0 0-1.5 0v3.8l-.464-.45a.75.75 0 1 0-1.043 1.079l1.725 1.67.004.003.007.007c.024.023.054.033.08.052.05.038.099.078.158.102a.7.7 0 0 0 .267.054q.007.002.016.003.146 0 .285-.057c.042-.018.076-.05.114-.074.04-.027.087-.044.123-.08l1.737-1.68a.75.75 0 0 0 .018-1.06M16.978 14.916l-1.737-1.68c-.031-.03-.07-.042-.102-.065-.045-.031-.085-.067-.136-.088a.75.75 0 0 0-.568 0c-.05.02-.091.057-.136.088-.033.023-.071.036-.101.065l-1.738 1.68a.751.751 0 0 0 1.043 1.078l.466-.45v3.802a.75.75 0 0 0 1.5 0v-3.802l.466.45a.75.75 0 0 0 1.06-.017.75.75 0 0 0-.017-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardShrareMoneyBold;
