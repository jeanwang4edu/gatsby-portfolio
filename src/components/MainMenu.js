import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

const MainMenu = () => (
    <StaticQuery query={graphql`
      {
        allWordpressMenusMenusItems(filter:{
        name:{
            eq: "Main menu"
        }
        }) {
        edges{
            node{
            name
            items{
                title
                        slug
            }
            }
        }
        }
      }
    `} render={props => (
        <div>
            {props.allWordpressMenusMenusItems.edges[0].node.items.map(item=>(
                <Link to={item.slug} key={item.title}>
                  {item.title}
                </Link>
            ))}
        </div>
     )}
    />
);

export default MainMenu;