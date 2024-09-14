import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGmailBold = ({
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
      d="M2.438 9.365v8.583a2.46 2.46 0 0 0 2.455 2.46 2.46 2.46 0 0 0 2.457-2.46v-3.67zM7.35 12.863v-.013l.013.012v-6.83l-.775-.748-.004-.004c-.066-.063-.142-.112-.214-.167-.042-.032-.08-.067-.124-.097a2.4 2.4 0 0 0-.312-.168c-.035-.017-.067-.038-.103-.052a2.3 2.3 0 0 0-.346-.108c-.04-.01-.078-.024-.119-.032a2 2 0 0 0-.305-.03c-.057-.005-.11-.018-.168-.018q-.019.002-.038.004l-.029-.002c-.065.002-.126.017-.189.024-.09.01-.183.015-.27.034-.064.014-.123.04-.184.057-.092.028-.186.053-.273.091-.05.022-.095.053-.144.08-.094.048-.188.096-.275.156q-.042.034-.083.07a2.6 2.6 0 0 0-.287.25l-.008.007c-.015.015-.025.033-.039.05-.088.097-.172.2-.244.311-.028.043-.048.09-.073.134-.05.092-.102.184-.142.282-.024.061-.038.124-.058.186-.027.09-.057.177-.074.271-.014.077-.017.156-.024.235-.006.07-.02.138-.02.21v.893zM16.643 12.857l.006-.006v.191l4.913-4.913V7.06c0-.069-.015-.133-.02-.199-.007-.085-.01-.169-.026-.252-.016-.084-.043-.164-.067-.245-.02-.07-.038-.143-.066-.212-.036-.089-.083-.17-.129-.255-.029-.053-.053-.109-.087-.16a2.4 2.4 0 0 0-.23-.295c-.018-.019-.03-.042-.048-.06l-.01-.009a2.4 2.4 0 0 0-.28-.246q-.044-.037-.09-.074c-.08-.056-.17-.1-.258-.148-.055-.029-.107-.064-.163-.089-.075-.032-.156-.053-.234-.078-.075-.024-.147-.053-.224-.07-.073-.016-.15-.02-.226-.029s-.149-.027-.227-.029l-.034.003q-.019-.002-.037-.004c-.106 0-.207.018-.31.031-.038.005-.077.005-.114.012a2.4 2.4 0 0 0-.367.1q-.05.013-.102.031c-.098.038-.19.088-.282.138-.053.03-.107.053-.158.086-.074.047-.139.104-.207.16-.049.038-.103.07-.15.114l-.003.004-.77.743zM16.649 14.456v3.492a2.46 2.46 0 0 0 2.457 2.46 2.46 2.46 0 0 0 2.456-2.46V9.543zM15.643 13.823v-6.83l-3.642 3.517-3.638-3.513v6.83l1.893 1.829a2.45 2.45 0 0 0 1.691.67c.017 0 .034-.004.052-.004s.035.005.052.005c.61 0 1.22-.223 1.697-.675z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGmailBold;
