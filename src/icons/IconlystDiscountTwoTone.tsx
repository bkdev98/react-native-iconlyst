import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill="none" fillRule="evenodd">
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.794 7.056a2.26 2.26 0 0 1 2.261-2.262h1.03c.595 0 1.168-.236 1.592-.657l.72-.72a2.26 2.26 0 0 1 3.197-.008l.01.008.72.72c.422.42.995.657 1.592.657h1.028a2.26 2.26 0 0 1 2.262 2.262v1.027c0 .598.236 1.17.657 1.594l.72.72c.885.88.89 2.312.01 3.198l-.01.009-.72.72a2.26 2.26 0 0 0-.657 1.592v1.029a2.26 2.26 0 0 1-2.262 2.26h-1.028a2.26 2.26 0 0 0-1.593.659l-.72.719a2.26 2.26 0 0 1-3.198.009l-.009-.01-.719-.718a2.26 2.26 0 0 0-1.593-.658H7.055a2.26 2.26 0 0 1-2.26-2.261v-1.03c0-.595-.238-1.17-.659-1.591l-.719-.72a2.26 2.26 0 0 1-.009-3.198l.01-.01.718-.72c.421-.423.658-.995.658-1.593z"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.43 14.569 5.14-5.14"
        opacity={0.4}
      />
      <Path
        fill={props.color}
        fillRule="nonzero"
        d="M14.567 15.322a.75.75 0 0 1-.53-.22.8.8 0 0 1-.16-.25.717.717 0 0 1 0-.57c.04-.09.09-.17.16-.24.28-.28.78-.28 1.06 0 .07.07.13.15.17.24.03.09.05.19.05.29 0 .101-.02.19-.05.28-.04.09-.1.18-.17.25a.75.75 0 0 1-.53.22M9.427 10.183c-.1 0-.19-.021-.28-.061a.8.8 0 0 1-.25-.16 1 1 0 0 1-.16-.25.714.714 0 0 1 0-.57c.04-.09.09-.18.16-.24a.77.77 0 0 1 1.06 0c.14.14.22.33.22.53 0 .1-.01.19-.05.28s-.1.17-.17.25a.77.77 0 0 1-.53.22"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystDiscountTwoTone;
