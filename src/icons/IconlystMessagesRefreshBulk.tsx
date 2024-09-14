import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesRefreshBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.122 16.182c-1.389 0-2.7-.74-3.419-1.934a.749.749 0 1 1 1.284-.774 2.48 2.48 0 0 0 2.135 1.208 2.504 2.504 0 0 0 2.494-2.506 2.5 2.5 0 0 0-2.494-2.505c-.406 0-.786.114-1.132.292h.03a.75.75 0 1 1 0 1.5l-1.797.001c-.008 0-.016-.005-.023-.005-.049 0-.096-.017-.144-.028-.049-.012-.098-.019-.144-.04-.009-.004-.018-.003-.027-.007-.036-.018-.059-.049-.09-.07-.034-.025-.074-.04-.103-.07q-.008-.012-.017-.025c-.035-.038-.058-.083-.085-.127-.023-.039-.05-.075-.066-.118-.018-.048-.022-.098-.03-.149-.006-.038-.022-.073-.022-.11V8.92a.75.75 0 0 1 .75-.75c.377 0 .676.283.73.645a3.97 3.97 0 0 1 2.17-.645 4.004 4.004 0 0 1 3.994 4.005 4.005 4.005 0 0 1-3.994 4.006m7.652-9.892a9.53 9.53 0 0 0-6.92-3.628 9.52 9.52 0 0 0-7.275 2.774c-2.806 2.815-3.57 7.136-1.914 10.73.11.273.443.894.99 1.848a.47.47 0 0 1-.023.508c-.222.313-.504.715-.724 1.046a1.376 1.376 0 0 0 1.14 2.14l1.371-.002c2.285-.002 5.111-.003 5.846.001h.033a9.49 9.49 0 0 0 7.271-3.398c2.9-3.437 2.985-8.49.205-12.019"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.122 16.182c-1.389 0-2.7-.74-3.419-1.934a.749.749 0 1 1 1.284-.774 2.48 2.48 0 0 0 2.135 1.208 2.504 2.504 0 0 0 2.494-2.506 2.5 2.5 0 0 0-2.494-2.505c-.406 0-.786.114-1.132.292h.029a.75.75 0 1 1 0 1.5l-1.796.001c-.008 0-.016-.005-.023-.005-.049 0-.096-.017-.144-.028-.049-.012-.098-.019-.144-.04-.009-.004-.018-.003-.027-.007-.036-.018-.059-.049-.09-.07-.034-.025-.074-.04-.103-.07q-.008-.012-.017-.025c-.035-.038-.058-.083-.085-.127-.023-.039-.05-.075-.066-.118-.018-.048-.022-.098-.03-.149-.006-.038-.022-.073-.022-.11V8.92a.75.75 0 0 1 .75-.75c.377 0 .676.283.73.645a3.97 3.97 0 0 1 2.17-.645 4.004 4.004 0 0 1 3.994 4.005 4.005 4.005 0 0 1-3.994 4.006"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesRefreshBulk;