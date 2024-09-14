import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageStarBold = ({
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
      d="M7.826 2.5c-1.593 0-2.926.568-3.859 1.568-.929.996-1.424 2.382-1.424 3.958v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zM6.333 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m12.455 14.674-.412-.82-.412.823c-.168.333-.486.56-.853.61l-.899.13.648.621c.269.256.392.63.326 1l-.154.887.824-.427c.323-.17.714-.171 1.044 0l.82.426-.154-.887c-.066-.364.055-.74.327-1l.646-.62-.903-.13a1.12 1.12 0 0 1-.848-.613"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.543 15.973v-5.73h19v5.73c0 1.576-.492 2.961-1.42 3.958-.932 1-2.265 1.568-3.863 1.568H7.826c-1.597 0-2.93-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958m13.02.066-.937.9.222 1.273c.1.623-.32 1.203-.933 1.3a1.12 1.12 0 0 1-.706-.115l-1.166-.604-1.17.607c-.166.088-.345.13-.52.13a1.133 1.133 0 0 1-1.117-1.306l.223-1.284-.94-.901a1.13 1.13 0 0 1-.03-1.587c.173-.18.405-.298.654-.334l1.307-.188.583-1.164a1.134 1.134 0 0 1 1.533-.491c.21.11.377.278.484.487l.585 1.17 1.307.186c.29.038.554.191.735.43.183.236.261.53.222.828a1.1 1.1 0 0 1-.336.663"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageStarBold;
