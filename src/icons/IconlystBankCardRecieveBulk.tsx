import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRecieveBulk = ({
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
      d="M2.99 14.77c0 2.793 1.793 4.67 4.462 4.67h4.888c.268 0 .402-.326.241-.54a2.5 2.5 0 0 1-.213-.34c-.032-.06-.07-.116-.097-.179-.045-.106-.073-.219-.103-.33-.011-.047-.031-.09-.041-.137a2.5 2.5 0 0 1 0-1c.01-.053.031-.1.045-.152.03-.107.056-.214.098-.316.027-.063.066-.119.097-.179.043-.084.082-.17.135-.25.026-.04.061-.072.09-.109.069-.09.135-.184.217-.266l2.338-2.33a2.5 2.5 0 0 1 3.536.005c.372.374.594.836.68 1.319.027.155.156.277.314.273.627-.016 1.291-.07 1.91.043.193.035.388-.099.396-.296.056-1.424.011-2.86.005-4.286 0-.165-.135-.3-.3-.3H3.29a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.524 3.52H7.453c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M21.194 16.662H16.39l1.052-1.049a.749.749 0 1 0-1.06-1.062l-2.335 2.33c-.05.05-.082.111-.115.171-.014.024-.035.043-.046.07a.74.74 0 0 0 0 .582q.005.006.009.013a.7.7 0 0 0 .153.227l2.336 2.321a.75.75 0 0 0 1.06-.004.75.75 0 0 0-.003-1.06l-1.045-1.039h4.798a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardRecieveBulk;
