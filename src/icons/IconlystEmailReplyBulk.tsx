import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailReplyBulk = ({
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
      d="M12.69 17.816c.024-.082.043-.166.076-.246.036-.088.086-.168.132-.251.033-.06.06-.122.097-.18q.138-.207.315-.384l1.797-1.797c.3-.3.66-.5 1.038-.614a.22.22 0 0 0 .147-.147 2.49 2.49 0 0 1 2.383-1.771h.9c.394 0 .771.064 1.132.168a.208.208 0 0 0 .268-.196V8.526c0-3.2-2.2-5.6-5.1-5.6h-8.9c-2.9 0-5.1 2.4-5.1 5.6v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.2 1.4 3.5 1.4h5.87c.154 0 .236-.186.15-.315-.038-.057-.064-.12-.098-.18-.045-.082-.095-.162-.13-.25-.034-.08-.053-.164-.078-.247-.022-.073-.05-.143-.065-.22a2.5 2.5 0 0 1 0-.978c.015-.076.043-.146.065-.22"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.375 13.226q-.9 0-1.8-.6l-4.1-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4.1 3.3c.5.4 1.2.4 1.7 0l4-3.3c.3-.3.8-.2 1.1.1.2.4.2.9-.2 1.1l-4 3.3c-.5.4-1.2.6-1.8.6M19.575 14.176h-.9a.75.75 0 0 0 0 1.5h.9c.589 0 1.05.46 1.05 1.05 0 .589-.461 1.05-1.05 1.05h-2.69l.52-.52a.749.749 0 1 0-1.06-1.06l-1.8 1.799a.75.75 0 0 0-.162.817.8.8 0 0 0 .162.244l1.8 1.8a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.061l-.52-.52h2.69a2.553 2.553 0 0 0 2.55-2.55 2.553 2.553 0 0 0-2.55-2.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailReplyBulk;
