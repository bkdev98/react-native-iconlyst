import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagStarOutline = ({
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
      d="M11.263 21.013H7.84c-3.191 0-5.336-2.239-5.336-5.571V7.821c0-3.332 2.145-5.571 5.336-5.571h8.09c3.192 0 5.337 2.239 5.337 5.571v2.956a.75.75 0 1 1-1.5 0V7.821c0-2.473-1.506-4.071-3.837-4.071H7.84c-2.33 0-3.836 1.6-3.836 4.071v7.621c0 2.473 1.506 4.071 3.836 4.071h3.423a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M11.887 12.765a4.19 4.19 0 0 1-4.184-4.183.75.75 0 0 1 1.5 0 2.683 2.683 0 0 0 5.366 0 .75.75 0 1 1 1.5 0 4.186 4.186 0 0 1-4.182 4.183M15.532 21.75a1.054 1.054 0 0 1-1.042-1.224l.308-1.744-1.28-1.23a1.053 1.053 0 0 1-.01-1.5c.16-.156.363-.261.583-.3l1.777-.26.786-1.583a1.05 1.05 0 0 1 .614-.532 1.06 1.06 0 0 1 1.269.513l.01.02.787 1.585 1.763.255a1.05 1.05 0 0 1 .576 1.8l-1.266 1.223.305 1.739a1.058 1.058 0 0 1-1.522 1.111l-1.583-.829-1.583.828c-.152.08-.32.124-.492.128m1.87-1.055.018.01zm.424-.006-.017.009zm-2.6-3.58.789.757a1.05 1.05 0 0 1 .306.936l-.191 1.084.99-.52a1.03 1.03 0 0 1 1 .01l.965.5-.188-1.074a1.03 1.03 0 0 1 .309-.942l.78-.755-1.09-.157a1.06 1.06 0 0 1-.8-.58l-.493-.99-.493.991a1.07 1.07 0 0 1-.785.576zm5.02 1.831-.006.008zm.122-.409v.021zm.516-1.293h.02zm-.241-.765-.01.008z"
    />
  </Svg>
);
export default IconlystShoppingBagStarOutline;
