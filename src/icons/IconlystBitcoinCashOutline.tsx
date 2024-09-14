import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCashOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M11.078 16.9a.75.75 0 0 1-.274-1.448l3.533-1.39a1.163 1.163 0 0 0-.856-2.163s-1.867.755-2.8 1.144a.75.75 0 0 1-.577-1.385c.941-.392 2.826-1.154 2.826-1.154a2.664 2.664 0 0 1 1.96 4.954l-3.536 1.39a.8.8 0 0 1-.276.052"
    />
    <Path
      fill={props.color}
      d="M13.04 12.018a.75.75 0 0 1-.285-1.444.79.79 0 0 0 .442-1.03.81.81 0 0 0-1.046-.457l-3.339 1.318a.753.753 0 0 1-.55-1.4l3.341-1.32a2.302 2.302 0 0 1 1.718 4.272.7.7 0 0 1-.282.06M12.85 17.28a.75.75 0 0 1-.7-.475l-.369-.929a.749.749 0 1 1 1.394-.553l.368.93a.75.75 0 0 1-.7 1.026zm1.958-.78a.75.75 0 0 1-.7-.475l-.367-.93a.752.752 0 1 1 1.4-.552l.367.931a.75.75 0 0 1-.696 1.026z"
    />
    <Path
      fill={props.color}
      d="M9.942 9.897a.75.75 0 0 1-.7-.474l-.369-.929a.75.75 0 1 1 1.394-.553l.37.93a.75.75 0 0 1-.7 1.026zm1.96-.77a.75.75 0 0 1-.7-.474l-.37-.93a.75.75 0 0 1 1.394-.553l.37.93a.748.748 0 0 1-.7 1.026z"
    />
    <Path
      fill={props.color}
      d="M11.623 16.687a.75.75 0 0 1-.7-.475L8.38 9.762a.752.752 0 1 1 1.4-.55l2.543 6.45a.747.747 0 0 1-.423.972.7.7 0 0 1-.277.053"
    />
  </Svg>
);
export default IconlystBitcoinCashOutline;
